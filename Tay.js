class Tay{
    constructor(mapReference,pjCol,pjFil,xPos,yPos){
        this.pjCol = pjCol;
        this.pjFil = pjFil;
        this.xPos = xPos; 
        this.yPos = yPos;
        this.mapReference = mapReference;
        // posición inicial // remover despues para asignarla por nivel
        this.pjCol = 0; // los valores se están quedando fijos, por eso no se mueve
        this.pjFil = 0; // los valores se están quedando fijos, por eso no se mueve
        this.xPos = (this.pjCol * 100) + 0; // los valores se están quedando fijos, por eso no se mueve
        this.yPos = (this.pjFil * 100) + 100; // los valores se están quedando fijos, por eso no se mueve
    }

    mostrar(){
    //    this.pjCol = 0; // los valores se están quedando fijos, por eso no se mueve
    //    this.pjFil = 0; // los valores se están quedando fijos, por eso no se mueve
    //    this.xPos = (this.pjCol * 100) + 0; // los valores se están quedando fijos, por eso no se mueve
    //    this.yPos = (this.pjFil * 100) + 100; // los valores se están quedando fijos, por eso no se mueve
        image(tay1, this.xPos, this.yPos);
        image(llave,610,210,80,80);
        image(cd,10,610,80,80);
        
    }

    mover(){
        //if(keyIsPressed){ // esto ya se está validando al llamar al método mover                
        switch (keyCode) {            
            case LEFT_ARROW: // izquierda
            if (this.pjCol - 1 >= 0) {
                if (this.mapReference[this.pjFil][this.pjCol - 1] === 0) {
                this.pjCol -= 1;
                }
            }
            break;
            case RIGHT_ARROW: // derecha
            if (this.pjCol + 1 < 12) {
                if (this.mapReference[this.pjFil][this.pjCol + 1] === 0) {
                this.pjCol += 1;
                }
            }
            break;
            case UP_ARROW: // arriba
            if (this.pjFil - 1 >= 0) {
                if (this.mapReference[this.pjFil - 1][this.pjCol] === 0) {
                this.pjFil -= 1;
                }
            }
            break;
            case DOWN_ARROW: // abajo
            if (this.pjFil + 1 < 7) {
                if (this.mapReference[this.pjFil + 1][this.pjCol] === 0) {
                this.pjFil += 1;
                }
            }
            break;
            }
            this.xPos = (this.pjCol * 100) + 0;
            this.yPos = (this.pjFil * 100) + 100;
        //}
    }

    getXPos(){
        return this.xPos;
    }
    setXPos(xPos){
        this.xPos = xPos;
    }
    getYPos(){
        return this.yPos;
    }
    setYPos(yPos){
        this.yPos = yPos;
    }
    getPjCol(){
        return this.pjCol;
    }
    setPjCol(pjCol){
        this.pjCol = pjCol;
    }
    getPjFil(){
        return this.pjFil;
    }
    setPjFill(pjFil){
        this.pjFil = pjFil;
    }
    

}