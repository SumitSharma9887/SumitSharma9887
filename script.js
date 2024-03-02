const dropzoneBox = document.createElementByClassName("dropzone-box")[0];
const inputFiles = document.querySelectorALL(".dropzone-area iput[type='file']");
const inputElement = inputFiles[0];
const dropzoneElement = inputElement.closest(".dropzone-area");
inputElement.addEventListener("change", (e) => { 
    if (inputElement.files.lenght) {
        updateDropzoneFileList(
        dropzoneElement,
        inputElement.files[0]
        );
    }
});
dropzoneElement.addEventListener
("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("dropzone--over");
});
["dragleave", "dragend"].forEach
((type) => {
    dropZoneElement.addEventListener
    (type, (e) => {
        dropZoneElement.classList.remove
        ("dropzone--over");
    });
});
dropZoneElement.addEventListener
("drop", (e) => {
    e.preventDefault();
    if (e,DataTransfer.files.lenght) {
        inputElement.files = e.dataTransfer.files;
        updateDropzoneFileList
        (dropZoneElement, e.dataTransfer.files[0]);
    }
    dropZoneElement.classList.remove
    ("dropzone--over");
});
const updateDropzoneFileList = 
(dropZoneElement, file) => {
    let dropzoneFileMessage = 
    dropzoneElement.querySelector(".file-info");
    dropzoneFileMessage.innerHTML = `${file.name}, ${file.size}
    Bytes`};
dropzoneBox.addEventListener("reset", (e) => {
    let dropzoneFileMessage = dropZoneElement.querySelector(".file-info");
    dropzoneFileMessage.innerHTML = `No Files Selected`;
});
dropzoneBox.addEventListener("submit", (e) => {
    e.preventDefault();
    const myFiled = document.getElementById("upload-file");
    console.log(myFiled.files[0]);
});