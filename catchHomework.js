function catchHomework(){
  var resource = lessonindex.lesson_list
  for (let ri = 0; ri < resource.length; ri++) {
    resource[ri].can_download = 1;
  }
};

try {
  let a = setInterval(()=>{
    if(lessonindex) {
      catchHomework();
      lessonindex.$watch("lesson_list",()=>catchHomework());
      clearInterval(a);
    }
  },200)
} catch (error) {
  console.err(error);
}
