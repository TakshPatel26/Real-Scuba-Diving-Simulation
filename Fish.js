AFRAME.registerComponent("fish",{
    init: function(){
        for (var i = 1;i<=10;i++){
            const id = 'fish${i}';
            const posX =(Math.random() * 100 + 20);      
            const posY = (Math.random() * 7 + 5);
            const posZ = (Math.random() * 50 + -30);

            const position = {x: posX,y:posY,z:posZ};
            this.createFish(id, position);
    }
},
createFish : function(id , position){
    const islandEl = document.querySelector("#island1");
    var fishEl = document.createElement("a-entity");
    fishEl.setAttribute("id",id);
    fishEl.setAttribute("position",position);
    fishEl.setAttribute("gltf-model","assets/fish/scene.gltf");
    fishEl.setAttribute("scale",{x:1,y:1,z:1});
    fishEl.setAttribute("animation-mixer",{});
    console.log("hello")
    islandEl.appendChild(fishEl);
}
});