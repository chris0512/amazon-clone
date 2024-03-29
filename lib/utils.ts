export const round2 = (num: number) =>
    Math.round((num + Number.EPSILON) * 100) / 100

export function convertDocToObj(doc: any) {
    if(doc && doc._id){
        doc._id = doc._id.toString();
    }
    return doc;
}