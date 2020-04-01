function catchHomework(){
  lessonindex.lesson_list.forEach(resource => resource.can_download = 1)
};

try {
  let a = setInterval(()=>{
    if(lessonindex) {
      catchHomework();
      lessonindex.$watch("lesson_list",()=>catchHomework());
      clearInterval(a);
    }
  },200)
} catch (err) {
  console.error(err);
}
