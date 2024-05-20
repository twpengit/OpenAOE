from fastapi import APIRouter, Request

from openaoe.backend.model.sensetime import SensetimeChatCompletionBody
from openaoe.backend.service.service_sensetime import chat_completion_v1

router = APIRouter()


@router.post("/v1/chat/completions", tags=["sensetime"])
async def sensetime_chat_completions_v1(request: Request, body: SensetimeChatCompletionBody):
    """
    Sensetime ChatCompletion api
    @param request: fastapi request
    @param body: body
    @return: response
    """
    ret = chat_completion_v1(request, body)
    return ret
