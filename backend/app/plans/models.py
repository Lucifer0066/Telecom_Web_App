from sqlalchemy import Column, Integer, String, ForeignKey
from plans.db import Base
from sqlalchemy.orm import relationship




class Plan(Base):
    __tablename__ = 'plans'

    id = Column(Integer, primary_key=True, index = True)
    Plan = Column(String(255))
    Validity = Column(String(255))
    Data = Column(String(255))


class User(Base):
    __tablename__  = 'users'

    id = Column(Integer, primary_key=True, index = True)
    name = Column(String(255))
    email = Column(String(255))  
    phone_number = Column(String(255))   
    password = Column(String(255))
    confirm_password = Column(String(255))
    


class Broadband(Base):
    __tablename__  = 'broadbandconn'

    id = Column(Integer, primary_key=True, index = True)
    name = Column(String(255))
    email = Column(String(255))     
    password = Column(String(255))  
    plan_name = Column(String(255))  


class GuestUser(Base):
    __tablename__  = 'guestusers'

    id = Column(Integer, primary_key=True, index = True)
    name = Column(String(255))
    email = Column(String(255))     
    password = Column(String(255))    

   