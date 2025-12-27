export interface Prompt{
    id : string ; 
    title : string ; 
    promptText : string ; 
    sampleImageUrl : string ; 
    modelUsed : string ; 
    steps : string[] ; 
    aspectRatio ?: string ; 
    seed ?: number ; 
    createdAt : string ; 
    updatedAt : string ; 
}

export interface PromptCreateInput{
    title : string ; 
    promptText : string ; 
    sampleImageUrl : string ; 
    modelUsed : string ; 
    steps : string[] ; 
    aspectRatio : string ; 
    seed : number ; 
}