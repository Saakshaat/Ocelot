
export interface SuccessResponse<T> {
    status: 'SUCCESS';
    data: T;
}

export type FailureResponse = {
    status: 'FAILURE',
    data: { message: string },
};

export type APIResponse = SuccessResponse<any> | FailureResponse;

export type FileChange = {
    fileName: string,
    type: 'delete' | 'create' | 'rename',
    changes?: string,
};

export const isFailureResponse = (arg: APIResponse): arg is FailureResponse => arg.status === 'FAILURE';

export const failureResponse = (message: string): FailureResponse => ({
    status: 'FAILURE',
    data: { message: message }
});

export const successResponse = <T>(data: T): SuccessResponse<T> => ({
    status: 'SUCCESS',
    data: data
});

export const validEmailSession = (): boolean => {
    const userEmail = localStorage.getItem('userEmail');
    const sessionId = localStorage.getItem('sessionId');

    if (userEmail === null || sessionId === null) {
        return false;
    }

    return true;
};

export const getUrl = (path: string): string => {
    return `https://us-central1-arjunguha-research-group.cloudfunctions.net/paws/${path}`;
};