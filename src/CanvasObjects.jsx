import { useRef, useState } from 'react'

import {Stage,Layer,Line,Rect,Circle, Transformer} from "react-konva"







export class selecttool{
    
    constructor(){
        this.name = "select"
        this.ref = null
     
        //store ref in terms of index
    }
    update(mousepos){
    
       return
    }
    mousedown(mousepos){
        return
    }
    mouseup(mousepos){
        return

    }
    propchangersrender(){
        return
    }
    render(color,i,somethingdoesntmattef){
        return
    }
    nextitem(){
        return new selecttool()
    }
}


/*future functionality
-symbols-common
-sets
-trees
ai/desmos functionaltiy
*/
//everyobkject need startdraw and enddraw
//also passive shit
//Line

//Design
//current tool
//pass params
//can change


//select tool
//contains ref to another tool





export class LineObject{
    constructor(){
        this.points = []
        this.width = 5
        this.name = "line"
        this.color = 'white'
    //color:{value,image,checkable?}
        
    }
    
    
    get returnpoints(){
        return this.points

    }
    mousedown(){
        return
    }

    mouseup(set_current,set_items,items){
        set_items([...items,this])
        set_current(this.inclassconstruct())
    }
    static nextitem(){
        return new LineObject()
    }
    nextitem(){
        return new LineObject()
    }
    update(mousepos){
  
        this.points.push(mousepos[0])
        this.points.push(mousepos[1])
    }
    dragfunc(e){
        this.points = e.target.points()
        //check this functionaity
    }
    inclassconstruct(){

        var temp= new LineObject()
        
        temp.color = this.color
        return temp;
    }
    propchangersrender(){
        return(

            <>
            <input></input>
            <button className = 'py-3 px-3 bg-regal-blue border-4 border-slate-500 m-1 rounded-full' onClick={() => {this.color = " #03e8fc"}}> </button>
            <button className = 'py-3 px-3 bg-regal-red border-4 border-slate-500 m-1 rounded-full' onClick={() => {this.color = "#fa0730"}}> </button>
            <button className = 'py-3 px-3 bg-regal-purple border-4 border-slate-500 m-1 rounded-full' onClick={() => {this.color = "#8d07fa"}}> </button>
            <button className = 'py-3 px-3 bg-white border-4 border-slate-500 m-1 rounded-full'  onClick={() => {this.color = "white"}}> </button>
            </>
        )
    }
    render(color,i,current,oref,trref){
        this.key = i
        function checksel(current){
            if(current.name == "select"){
                return true
            }
            else{
                return false
            }
        }
        
        return(
            <>
            <Line points = {this.points} stroke={this.color} strokeWidth={self.width} key = {i} ref = {oref} 
                draggable = {checksel(current)}

                onDragEnd={(e) =>  this.dragfunc(e)}
                onClick={(e)=>{current.ref = this.key}}
                
    
            
            >

            </Line>
            {(current.name == "select" && current.ref == i)?(
                    <Transformer
                    ref = {trref}
                    flipEnabled={false}
                    boundBoxFunc={(oldbox,newbox) => {
                        if(Math.abs(newbox.width) < 5 || Math.abs(newbox.height) <5){
                            return oldbox
                        }
                        return newbox
                    }}
                    ></Transformer>) : (<></>)
            }
                
            </>
        )
    }


}



// Rectangle
export class RectangleObject{
    constructor(){  
        this.topleft = []
        this.botright = []
        this.name = "rect"
        this.color = "#4361c4"
        this.fill = true
        
    
        
    }
    inclassconstruct(){

        var temp= new RectangleObject()
        temp.fill = this.fill
        temp.color = this.color
        return temp;
    }
    nextitem(){
        return new RectangleObject()
    }
    
    update(mousepos){
        
        
        this.botright = [mousepos[0],mousepos[1]]
        
        this.width = Math.abs(this.botright[0] -this.topleft[0])
        this.height =Math.abs(this.botright[1] -this.topleft[1])
        if(this.botright[0] < this.topleft[0]){
            this.width *= -1
        }
        if(this.botright[1] < this.topleft[1]){
            this.height *= -1
        }
        
    }

    
    mousedown(mousepos){
        this.topleft = [mousepos[0],mousepos[1]]
        
        this.botright = [mousepos[0],mousepos[1]]
        this.width = Math.abs((this.botright[0] -this.topleft[0]))
        this.height =Math.abs((this.botright[1] -this.topleft[1]))
      
        
    }
    mouseup(set_current,set_items,items){
        set_items([...items,this])
        set_current(this.inclassconstruct())
     
    }
    dragfunc(e){
        this.topleft = [e.target.x(),e.target.y()]
        this.botright = [this.topleft[0] + this.width,this.topleft[1] + this.width]
       

    }
    propchangersrender(){
        
        return(

            <>
                <button className = 'py-3 px-3 bg-regal-blue border-4 border-slate-500 m-1 rounded-full' onClick={() => {this.color = " #03e8fc"}}> </button>
                <button className = 'py-3 px-3 bg-regal-red border-4 border-slate-500 m-1 rounded-full' onClick={() => {this.color = "#fa0730"}}> </button>
                <button className = 'py-3 px-3 bg-regal-purple border-4 border-slate-500 m-1 rounded-full' onClick={() => {this.color = "#8d07fa"}}> </button>
                <button className = 'py-3 px-3 bg-white border-4 border-slate-500 m-1 rounded-full'  onClick={() => {this.color = "white"}}> </button>
                <button className='py-3 px-3 bg-slate-600 border-4 border-slate-500 m-1' onClick={() => { 
                    if(this.fill == true){
                        this.fill = false
                    }
                        
                    else{
                        this.fill = true
                    }
                }}  ></button>
            </>
        )
    }
    render(color,i,current,oref,trref){
        this.key = i
      
        
        function checksel(current){
            if(current.name == "select"){
                return true
            }
            else{
                return false
            }
        }
        
   

        
        return(
            <>
              <Rect x = {this.topleft[0]} y = {this.topleft[1]} width={this.width} 
                height={this.height} key = {i} fill = {(this.fill == true)?this.color:null}  stroke={'black'} 
                ref = {(current.name == "select" && current.ref == i)?oref:null}
                draggable = {checksel(current)}
                
                onDragEnd={(e) =>  this.dragfunc(e)}
                onClick={(e)=>{current.ref  = this.key}}
                


                ontransformEnd  ={(e) => {
                    
                    var tnode = oref.current
                    const scalex = tnode.scaleX()
                    const scaley =tnode.scaleY()

                    tnode.scaleX(1)
                    tnode.scaleY(1)
                    this.topleft = [ tnode.x(),tnode.y()]
                

                    this.height = Math.max(5,tnode.height() * scaley)
                    this.width = Math.max(tnode.width() * scalex)

                    this.botright = [this.topleft[0] + this.width,this.topleft[1] + this.width]
                
                    
                    

                }}
                >

                </Rect>
                {(current.name == "select" && current.ref == i)?(
                    <Transformer
                
                    ref = {trref}
                    flipEnabled={false}
                    boundBoxFunc={(oldbox,newbox) => {
                        if(Math.abs(newbox.width) < 5 || Math.abs(newbox.height) <5){
                            return oldbox
                        }
                        return newbox
                    }}
                    ></Transformer>) : (<></>)
                }
                
               
            </>
              
        )
         
       
    }

}
    

//Circle
export class CircleObject{

    constructor(){
        this.middle = []
        this.radius = 0 
        this.color  = "white"
        
        
    }
    update(mousepos){
        this.radius = Math.sqrt((this.middle[0] - mousepos[0])**2 + (this.middle[1] - mousepos[1])**2)

    }
    mousedown(mousepos){
        this.middle = [mousepos[0],mousepos[1]]

    }
    inclassconstruct(){

        var temp= new RectangleObject()
        temp.color = this.color
        return temp;
    }
    mouseup(set_current,set_items,items){
        set_items([...items,this])
        set_current(this.nextitem())
    }
    dragfunc(e){
        this.middle = [e.target.x(),e.target.y()]


    }
    propchangersrender(){
        return
    }
    render(color,i,current,oref,trref){
        this.key = i
         
        function checksel(current){
            if(current.name == "select"){
                return true
            }
            else{
                return false
            }
        }
        
        
        return(
         <>
            <Circle
            x = {this.middle[0]} y = {this.middle[1]}
            radius = {this.radius}
            fill={color}
            key = {i}
            draggable={() => checksel(current)}
            onClick={(e)=>{current.ref  = this.key}}
            onDragEnd={(e) =>  this.dragfunc(e)}
            ref = {oref}
            ontransformEnd  ={(e) => {
                    
                var tnode = oref.current
                const scalex = tnode.scaleX()
                const scaley =tnode.scaleY()

                
                if(scalex < 1 || scalex < 1){
                    this.radius = tnode.radius() * Math.min(scalex,scaley)
                }
                else if (scalex > 1 || scaley >1){
                    this.radius = tnode.radius() * Math.max(scalex,scaley)
                }
                
                tnode.scaleX(1)
                tnode.scaleY(1)
                
                

            }}
            >

            </Circle>
            {(current.name == "select" && current.ref == i)?(
                    <Transformer
                    ref = {trref}
                    flipEnabled={false}
                    boundBoxFunc={(oldbox,newbox) => {
                        if(Math.abs(newbox.width) < 5 || Math.abs(newbox.height) <5){
                            return oldbox
                        }
                        return newbox
                    }}
                    ></Transformer>) : (<></>)
            }

        </>
        )

    }
    nextitem(){
        return new CircleObject
    }
    static nextitem(){
        return new CircleObject

    }

}



//Image
export class ImageObject{

    constructor(){
        
    }
    update(){

    }
    mousedown(){

    }
    mouseup(set_current,set_items,items){

    }
    render(color,i,current,oref,trref){
        
    }
    nextitem(){
        
    }
    static nextitem(){

    }

}





//Triangle
export class TextObject{

    constructor(){
        this.pos = []
        this.color
        this.text 
        this.width
        this.height
    }
    update(){

    }
    mousedown(){

    }
    mouseup(set_current,set_items,items){
        
    }
    dragfunc(e){
        this.middle = [e.target.x(),e.target.y()]


    }
    render(color,i,current,oref,trref){
        this.key = i
        return(
            <>
               
        
                   
                <Text text = {this.text} ref = {oref}
                width = {this.width} height = {this.height}
                color = {color}
            
                ></Text>
               
   
     
               {(current.name == "select" && current.ref == i)?(
                       <Transformer
                       ref = {trref}
                       flipEnabled={false}
                       boundBoxFunc={(oldbox,newbox) => {
                           if(Math.abs(newbox.width) < 5 || Math.abs(newbox.height) <5){
                               return oldbox
                           }
                           return newbox
                       }}
                       ></Transformer>) : (<></>)
               }
   
           </>
           )
   
       }

    
  
    nextitem(){
        
    }
    static nextitem(){

    }

}



//Custom Shape
export class CustomObject{

    constructor(){
        
    }
    update(){

    }
    mousedown(){

    }
    mouseup(){

    }
    render(){

    }
    nextitem(){
        
    }
    static nextitem(){

    }

}


export default LineObject