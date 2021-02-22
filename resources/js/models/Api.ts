import axios, { Method } from 'axios'
import { Answer, Option, Question, User } from '@models/Data'

export interface DatabaseRecordBase {
    id: number
    updated_at: string,
    createed_at: string,
}

export interface ApiResponseBase {
    title: string
    status: number
}

export type InvalidParamsResponse = {
    [key: string]: any
}

export interface ApiResponseWithItems<T> extends ApiResponseBase {
    items: T[]
}

export interface ApiResponseWithInvalidParams {
    invalidParams: InvalidParamsResponse
}

export type ApiResponse<T> = DatabaseRecordBase & T


export type QuestionGetResponse = ApiResponseWithItems<ApiResponse<Question>>
export interface QuestionPostResponse extends ApiResponseBase { }

export type OptionGetResponse = ApiResponseWithItems<ApiResponse<Option>>
export type AnswerGetResponse = ApiResponseWithItems<ApiResponse<Answer>>
export type UserMeGetResponse = ApiResponseWithItems<ApiResponse<User>>


export type PostResponse<T, K> = {
    type: 'success', data: T
} |
{
    type: 'failed', data: K
}


export const backendApiAxios = axios.create({
    baseURL: '/api',
    headers: {
        headers: {
            'Accept': 'application/json'
        }
    }
})

export interface LogoutResponse extends ApiResponseBase { }

export const isSuccessResponse = (code: number) => (code > 200) && (code < 300)


export const getCSRFToken = () => {
    const tokenTag = Array.from(document.getElementsByTagName('meta'))
        .find(el => el.name === 'csrf-token')
    if (!tokenTag) return undefined
    return tokenTag.content
}



export const ApiResquest = async function <T = any, K = any>(method: Method, resource: string, data?: any) {
    try {
        const res = await backendApiAxios({
            method,
            url: resource,
            data
        })
        return { type: 'success', data: res.data as T } as PostResponse<T, K>
    } catch (error) {
        console.error(error.response || error)
        if (error.response)
            return { type: 'failed', data: error.response.data as K } as PostResponse<T, K>
        return undefined
    }
}

export const getFullQuestionSetById = async (id: number) => {
    try {
        const questionRes = await ApiResquest<QuestionGetResponse>('GET', `/questions/${id}`)
        if (!questionRes || questionRes.type === 'failed' || questionRes.data.items.length < 1) return undefined
        const optionsRes = await ApiResquest<OptionGetResponse>('GET', `/questions/${id}/options`)
        if (!optionsRes || optionsRes.type === 'failed' || optionsRes.data.items.length < 1) return undefined
        const answerRes = await ApiResquest<AnswerGetResponse>('GET', `/questions/${id}/answers`)
        if (!answerRes || answerRes.type === 'failed' || answerRes.data.items.length < 1) return undefined

        return {
            questions: questionRes.data.items[0],
            options: optionsRes.data.items,
            anwsers: answerRes.data.items
        }
    } catch (error) {
        console.error(error)
        return undefined
    }
}

