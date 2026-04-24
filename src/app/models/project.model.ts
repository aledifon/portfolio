export interface Project{
    "id": number,
    "title": string,
    "year": string,
    "role": string,
    "stack": {"name": string, "icon": string}[],
    "description": string,
    "contributions": string[],
    "impact": string[]
}