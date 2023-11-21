from fastapi import FastAPI
from autogen import config_list_from_json
import autogen
from pydantic import BaseModel
import json

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

class Message(BaseModel):
    api_key: str
    msg: str

@app.get("/api/healthchecker")
def read_root():
    return {"status": "success", "message": "Integrate FastAPI Framework with Next.js"}


# get api key from user, use to create its own agents for calling
@app.post("/api/wizard")
def callAgents(message: Message):
    # Get api key
    config_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST") # pass api_key from user
    llm_config = {"config_list": config_list, "seed": 42, "request_timeout": 120}

    # Create user proxy agent, coder, and a product manager
    user_proxy = autogen.UserProxyAgent(
        name="User_proxy",
        system_message="A human admin who will give the idea and run the code provided by the Designer and then the coder.",
        code_execution_config={"last_n_messages": 2, "work_dir": "coding"},
        human_input_mode="ALWAYS",
    )

    coder = autogen.AssistantAgent(
        name="Coder",
        llm_config=llm_config
    )

    pm = autogen.AssistantAgent(
        name="product_manager",
        system_message="You will help break down the initial idea into a well scoped requirement for the coder; Do not involve in future conversations or error fixing",
        llm_config=llm_config
    )

    designer = autogen.AssistantAgent(
        name="designer",
        system_message="You will help create the initial look and feel concept of the project for the client and communicate this with the PM and coder",
        llm_config=llm_config
    )

    # Create groupchat
    groupchat = autogen.GroupChat(
        agents=[user_proxy, coder, pm, designer],
        messages=[]
    )
    manager = autogen.GroupChatManager(groupchat=groupchat, llm_config=llm_config)

    #Build a classic & basic pong game with 2 players in html/javascript using the threejs library
    # TODO: pass msg from user
    #msg = "Build a classic & basic pong game with 2 players in html/javascript using the threejs library"
    msg = message.msg
    #msg = input("Type your prompt idea for a program here:")

    # Start the conversation
    #TODO: return the conversation
    user_proxy.initiate_chat(
        manager, message=msg
    )

    return json.dumps(user_proxy.chat_messages)