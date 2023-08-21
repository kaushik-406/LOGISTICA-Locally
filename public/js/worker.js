self.addEventListener('message', function(e){
    let data = e.data
    let processedData = processImageData(data)
    self.postMessage(processedData) 
})

function processImage(data) {
    // Image Processing is done

    return 'Image Processed';
}