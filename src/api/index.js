import {post} from "@/api/http";
import apiUrls from '@/api/config';

export default {
    applyFlow
}

function applyFlow(data){
    return post(apiUrls.applyFlow,data)
}

