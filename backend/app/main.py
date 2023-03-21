from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from plans import models
from plans.db import get_db, engine
from plans.routers import plans, broadband, guestuser, user, authentication


app = FastAPI()

models.Base.metadata.create_all(engine)


app.include_router(user.router)
app.include_router(authentication.router)
app.include_router(plans.router)
app.include_router(broadband.router)
app.include_router(guestuser.router)


origins = [
    "https://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)















