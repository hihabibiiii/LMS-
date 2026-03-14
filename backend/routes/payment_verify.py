from fastapi import APIRouter
from pydantic import BaseModel
import razorpay
import schemas
router = APIRouter()

client = razorpay.Client(
     auth=("rzp_test_SQz2aqKjJK8fAd","202hmJ6VfO06QYnd6QzY403I")
)

class VerifyPayment(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str


@router.post("/verify-payment")
def verify_payment(data: schemas.VerifyPayment):

    try:

        params_dict = {
            'razorpay_order_id': data.razorpay_order_id,
            'razorpay_payment_id': data.razorpay_payment_id,
            'razorpay_signature': data.razorpay_signature
        }

        client.utility.verify_payment_signature(params_dict)

        return {"status": "success"}

    except:
        raise HTTPException(status_code=400, detail="Payment verification failed")