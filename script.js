 var star = function(x,y,z){
     this.x=x;
     this.y=y;
     this.z=z;
     this.size = 25;
 }
 
 
 const canvas  = document.getElementById('canvas')
 const ctx = canvas.getContext('2d')

 canvas.height = window.innerHeight;
 canvas.width =   window.innerWidth ;  
 var stars = new Array()
 const max_depth = 7500;
 for(var index = 0;index<100;index++){
     stars[index] = new star(Math.random()*canvas.width ,Math.random()*canvas.height , index*max_depth/200 )
 }

  
 
  

 function animate(){
     requestAnimationFrame(animate);
     canvas.height = window.innerHeight;
    canvas.width =   window.innerWidth ;
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,canvas.width , canvas.height) ;
    for (var index = 0 ;index<stars.length; index++){
            let star = stars[index];
            star.z-=5;
            if(star.z<=0){
                stars.push(stars.splice(index,1)[0])
                star.z= max_depth ;
                continue;
            } 
            let translate_x =canvas.width/2;
            let translate_y =canvas.height/2;


            let field_of_view = 100;
            let scale = field_of_view/(field_of_view + star.z)
            let star_x = (star.x - translate_x )/(star.z/field_of_view) + translate_x;
            let star_y = (star.y - translate_y)/(star.z/field_of_view) + translate_y;
            let color = Math.floor(scale * 255);
            
            ctx.fillStyle='rgba('+color+','+color+','+color+')'
          //  ctx.fillStyle='white'
          ctx.beginPath()
          ctx.arc(star_x,star_y,star.size*scale , 0, 2*Math.PI ,false);
          ctx.fill()

            //ctx.fillRect(star_x , star_y , star.size *scale ,star.size*scale)
    }


 }
 animate();

 