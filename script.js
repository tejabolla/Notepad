var fontselect='';
var no_notes=localStorage.length;                //for no of notes added
var min_lst=[]                                     //for storing the minimized notes
var note_lst=[]
for(var i=8;i<=30;i++)
{
    fontselect+='<option value="'+i+'">'+i+'</option>';
    // console.log(fontselect);
}
function remove(arr, value) { 

    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

// console.log(window.getSelection)




// function reload()
// {
//     for(var i=0;i<localStorage.length;i++)
//     {
//         var key=localStorage.key(i);
//         var val=localStorage.getItem(key);
//         console.log(typeof(key));
//         console.log(typeof(val));
//         addjq('demo',key);
//     }
// }

// reload();
function changecolor(txt_area_id)
{
    var x=document.getElementById(txt_area_id);
    var clrid=document.getElementById(txt_area_id+'cid');
    var btnid=document.getElementById(txt_area_id+'txtarclr');
    // console.log(clrid.value);
    btnid.style.backgroundColor=clrid.value;
    // console.log(x.value);
    x.style.backgroundColor =clrid.value;
}

function changetxtcolor(txt_area_id)
{
    var x=document.getElementById(txt_area_id);
    var clrid=document.getElementById(txt_area_id+'txt');
    var btnid=document.getElementById(txt_area_id+'clr');
    // console.log(clrid.value);
    btnid.style.color=clrid.value;
    // console.log(x.value);
    x.style.color =clrid.value;
}

function changefont(textareaname)
{
    var x=document.getElementById(textareaname+'txtar');
    var y=document.getElementById(textareaname+'sel');
    // console.log(y.value);
    // console.log(x.style.fontSize.value);
    x.style.fontSize=y.value+'px';
    // console.log(x);
    console.log(x.style.fontSize);
}
function boldtog(textareaname)
{
    var x=document.getElementById(textareaname+'txtar');
    var y=document.getElementById(textareaname+'bld');
    if(x.style.fontWeight=='normal')
        x.style.fontWeight='bold';
    else
        x.style.fontWeight='normal';

   
}


function addnoteloc(key,htmlid,notenum){
    var val=localStorage.getItem(key);
    var textareaname= key;
    var scwid=screen.width;
    var inpid=textareaname+'inp';
    var txt_area_id=textareaname+'txtar';
    var colorid=txt_area_id+'cid';
    var colortxt=txt_area_id+'txt';
    var txtclrbtn=txt_area_id+'clr';
    var txtarbtn=txt_area_id+'txtarclr';
    var selid=textareaname+'sel';
    var bldid=textareaname+'bld';
    var minid=textareaname+'min';


    var x=  '<form id="'+textareaname+'" >';
    x+=' <input class="inptxtarea" disabled="disabled" type="text" id="'+inpid+'" placeholder="enter the input" value="'+textareaname+'">';
    // x+='<legend>'+textareaname+'</legend>';
    // alert(screen.width)
    //prevented extra line after div tag by adding inline-block
    x+='<div class="center"><select id="'+selid+'" class="btnnote" style="margin:auto" onchange="changefont(\''+textareaname+'\')"; >'+fontselect+'</select>';
    x+='<input id="'+colortxt+'" type="color" class="clrbtn" oninput="changetxtcolor(\''+txt_area_id+'\')" /><button id="'+txtclrbtn+'" class="bgclr"><b>A</b></button>';
    x+='<input id="'+colorid+'" type="color" class="clrbtn" oninput="changecolor(\''+txt_area_id+'\')" /><button id="'+txtarbtn+'" class="bgclr"><b>A</b></button>';
    x+='<button id="'+bldid+'" type="button" onclick="boldtog(\''+textareaname+'\')" class="bgclr"><b>B</b></button></div>';
    

    x+='<button type="button" class="btnnote" style="float:right;" onclick="saveme(\''+textareaname+'\');"><b>Save</b></button>';
    x+='<button type="button" class="btnnote" style="float:right;" onclick="delme(\''+textareaname+'\');"><abbr title="Delete"><b>X</b></abbr></button>'
    x+='<button id="'+minid+'" type="button" onclick="minimize(\''+textareaname+'\')" class="bgclr" style="float:right;"><abbr title="Minimize"><b>-</b></abbr></button>';
    x+='<br><textarea id="'+txt_area_id+'"></textarea></form>';

    // x+='<button class="xmark" type="button" id="" onclick=delme("'+textareaname+'")>x</button></fieldset>';

    // var sk=document.getElementById(htmlid); 
    // sk.innerHTML+=x;
    htmlid='#'+htmlid;
    // jQuery("#demo").append("<p>fskhfs kfh shfkuds hfiuwe </p>");
    jQuery(htmlid).append(x);

    document.getElementById(txt_area_id).value=val;

    // alert("Hey running")
    var list_id='';
    list_id=document.getElementById("list_add")                                 //id of textarea where list is stored


    var y='<button type="button" class="list_btn" id="'+textareaname+'ls" onclick="load_fun(\''+textareaname+'\',\''+'demo'+'\');"><b>'+notenum+'.'+textareaname+'</b></button>'

     // var y='<button type="button" style="background-color: white;width:30px;height:20px;" id="'+textareaname+'ls" onclick="saveme(\''+textareaname+'\');">hello</button>'

    
    // jQuery(htmlid).append(y);
    jQuery(list_id).append(y)
    
}


function load_fun(key,htmlid)
{
    if(min_lst.includes(key))
    {
        console.log("In minlist");
    }
    else{
        return;
    }
    min_lst=remove(min_lst,key);
    var val=localStorage.getItem(key)
    console.log(no_notes)
    var textareaname= key;
    var scwid=screen.width;
    var inpid=textareaname+'inp';
    var txt_area_id=textareaname+'txtar';
    var colorid=txt_area_id+'cid';
    var colortxt=txt_area_id+'txt';
    var txtclrbtn=txt_area_id+'clr';
    var txtarbtn=txt_area_id+'txtarclr';
    var selid=textareaname+'sel';
    var bldid=textareaname+'bld';
    var minid=textareaname+'min';

    var x=  '<form id="'+textareaname+'" >';
    x+=' <input class="inptxtarea" disabled="disabled" type="text" id="'+inpid+'" placeholder="enter the input" value="'+textareaname+'">';
    // x+='<legend>'+textareaname+'</legend>';
    x+='<div class="center"><select id="'+selid+'" class="btnnote" style="margin:auto" onchange="changefont(\''+textareaname+'\')"; >'+fontselect+'</select>';
    x+='<input id="'+colortxt+'" type="color" class="clrbtn" oninput="changetxtcolor(\''+txt_area_id+'\')" /><button id="'+txtclrbtn+'" class="bgclr"><b>A</b></button>';
    x+='<input id="'+colorid+'" type="color" class="clrbtn" oninput="changecolor(\''+txt_area_id+'\')" /><button id="'+txtarbtn+'" class="bgclr"><b>A</b></button>';
    x+='<button id="'+bldid+'" type="button" onclick="boldtog(\''+textareaname+'\')" class="bgclr"><b>B</b></button></div>';

    x+='<button type="button" class="btnnote" style="float:right;" onclick="saveme(\''+textareaname+'\');"><b>Save</b></button>';
    x+='<button type="button" class="btnnote" style="float:right;" onclick="delme(\''+textareaname+'\');"><abbr title="Delete"><b>X</b></abbr></button>'
    x+='<button id="'+minid+'" type="button" onclick="minimize(\''+textareaname+'\')" class="bgclr" style="float:right;"><abbr title="Minimize"><b>-</b></abbr></button>';
    x+='<br><textarea id="'+txt_area_id+'"></textarea></form>';

    // x+='<button class="xmark" type="button" id="" onclick=delme("'+textareaname+'")>x</button></fieldset>';

    // var sk=document.getElementById(htmlid); 
    // sk.innerHTML+=x;
    htmlid='#'+htmlid;
    jQuery(htmlid).append(x);
    document.getElementById(txt_area_id).value=val;
    // localStorage.removeItem(key);
    
}





function addjq(htmlid,inputid)
{
    var textareaname= document.getElementById(inputid).value;
    if(textareaname.length==0)
    {
        alert('Hey title of note is empty');
        return;
    }
    if(textareaname.length>16)
    {
        alert('Hey your title exceeds 16 characters. Please reduce to 16 or less');
        return;
    }
//                 if (localStorage.getItem('email') !== null) {
//     console.log(`Email address exists`);
// } else {
//     console.log(`Email address not found`);
// }
    if(localStorage.getItem(textareaname)!=null)
    {
        alert('Hey title already exists. Please enter another title');
        return;
    }
    if(note_lst.includes(textareaname))
    {
        alert('Hey title already exists. Please enter another title')
        return;
    }
    note_lst.push(textareaname);
    
    no_notes+=1;
    console.log(no_notes)

    var scwid=screen.width;
    var inpid=textareaname+'inp';
    var txt_area_id=textareaname+'txtar';
    var colorid=txt_area_id+'cid';
    var colortxt=txt_area_id+'txt';
    var txtclrbtn=txt_area_id+'clr';
    var txtarbtn=txt_area_id+'txtarclr';
    var selid=textareaname+'sel';
    var bldid=textareaname+'bld';
    var minid=textareaname+'min';

    var x=  '<form id="'+textareaname+'" >';
    x+=' <input class="inptxtarea" disabled="disabled" type="text" id="'+inpid+'" placeholder="enter the input" value="'+textareaname+'">';
    // x+='<legend>'+textareaname+'</legend>';
    x+='<div class="center"><select id="'+selid+'" class="btnnote" style="margin:auto" onchange="changefont(\''+textareaname+'\')"; >'+fontselect+'</select>';
    x+='<input id="'+colortxt+'" type="color" class="clrbtn" oninput="changetxtcolor(\''+txt_area_id+'\')" /><button id="'+txtclrbtn+'" class="bgclr"><b>A</b></button>';
    x+='<input id="'+colorid+'" type="color" class="clrbtn" oninput="changecolor(\''+txt_area_id+'\')" /><button id="'+txtarbtn+'" class="bgclr"><b>A</b></button>';
    x+='<button id="'+bldid+'" type="button" onclick="boldtog(\''+textareaname+'\')" class="bgclr"><b>B</b></button></div>';

    x+='<button type="button" class="btnnote" style="float:right;" onclick="saveme(\''+textareaname+'\');"><b>Save</b></button>';
    x+='<button type="button" class="btnnote" style="float:right;" onclick="delme(\''+textareaname+'\');"><abbr title="Delete"><b>X</b></abbr></button>'
    x+='<button id="'+minid+'" type="button" onclick="minimize(\''+textareaname+'\')" class="bgclr" style="float:right;"><abbr title="Minimize"><b>-</b></abbr></button>';
    x+='<br><textarea id="'+txt_area_id+'"></textarea></form>';

    // x+='<button class="xmark" type="button" id="" onclick=delme("'+textareaname+'")>x</button></fieldset>';

    // var sk=document.getElementById(htmlid); 
    // sk.innerHTML+=x;
    htmlid='#'+htmlid;
    jQuery(htmlid).append(x);


    // alert("Hey running")
    var list_id='';
    list_id=document.getElementById("list_add")                                 //id of textarea where list is stored


    var y='<button type="button" class="list_btn" id="'+textareaname+'ls" onclick="load_fun(\''+textareaname+'\',\''+'demo'+'\');"><b>'+no_notes+'.'+textareaname+'</b></button>'

     // var y='<button type="button" style="background-color: white;width:30px;height:20px;" id="'+textareaname+'ls" onclick="saveme(\''+textareaname+'\');">hello</button>'

    
    // jQuery(htmlid).append(y);
    jQuery(list_id).append(y)
    // alert(list_id)
    
}

function minimize(mytextareaname)
{
    // console.log(mytextareaname);
    // var name=document.getElementById(delid);
    // alert(name.value);
    // localStorage.removeItem(mytextareaname);
    min_lst.push(mytextareaname);
    console.log(min_lst);
    name='#'+mytextareaname;
    // alert(name)
    saveme(mytextareaname)
    jQuery(name).remove();
    // jQuery(name+'ls').remove()
    // jQuery()
}



function delme(mytextareaname)
{
    // console.log(mytextareaname);
    // var name=document.getElementById(delid);
    // alert(name.value);
    no_notes-=1;
    localStorage.removeItem(mytextareaname);
    note_lst=remove(note_lst,mytextareaname);
    name='#'+mytextareaname;
    // alert(name)
    jQuery(name).remove();
    jQuery(name+'ls').remove();
    // jQuery()
}
function del()
{
    var name=document.getElementById('delid').value;
    if(name.length==0)
    {
        alert('Hey title of note is empty cannot be deleted');
        return;
    }
    localStorage.removeItem(name);
    name='#'+name;
    jQuery(name).remove();
    
}

function saveme(mytextareaname)
{
    var txtid=mytextareaname+'txtar';
    console.log(txtid.innerHTML);
    var x=document.getElementById(txtid).value;
    if(x.length==0){
        alert("Note is empty and cannot be saved");
        return;
    }
    console.log(x);
    localStorage.setItem(mytextareaname,x);
}

function reload()
{
    for(var i=localStorage.length-1;i>=0;i--)
    {
        var key=localStorage.key(i);
        console.log(key)
        // console.log(typeof(key))
        addnoteloc(key,'demo',localStorage.length-i);
    }
}

