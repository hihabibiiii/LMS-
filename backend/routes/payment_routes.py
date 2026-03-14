from fastapi import APIRouter
from pydantic import BaseModel
import razorpay
import schemas

router = APIRouter()

client = razorpay.Client(
     auth=("rzp_test_SQz2aqKjJK8fAd","202hmJ6VfO06QYnd6QzY403I")
)
@router.post("/create-order")
def create_order(data: dict):

    amount = data["amount"] * 100

    order = client.order.create({
        "amount": amount,
        "currency": "INR",
        "payment_capture": 1
    })

    return order