var stream;
export const getStream=() =>{
    return stream
}

const stream = navigator.mediaDevices
.getUserMedia({
audio: true,
video: true,
}).then(video =>{
    stream = video
}
) 
