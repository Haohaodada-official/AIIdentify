

//% weight=10 color=#FF6600 icon="\uf030" block="AI摄像头"
/**
//% groups='["图像识别", "颜色识别"]'
*/
namespace AIIdentify {

    export enum ailight {
        //% block=red
        red = 3,
        //% block=green
        green = 4,
        //% block=blue
        blue = 5,
        //% block=white
        white = 6
    }

    export enum rgbstate{
        //% block=lighton
        state1 = 0,
        //% block=lightoff
        state2 = 1
    }

    export enum allcolor{
        //% block=red
        red = 0,
        //% block=green
        green = 1,
        //% block=yellow
        yellow = 2
    }

    export enum coloraxis{
        //% block=X
        x = 8,
        //% block=Y
        y = 9
    }

    export enum faceaxis {
        //% block=X
        x = 11,
        //% block=Y
        y = 12
    }


    let ai_address = 36;

    //% group="图像识别"
    //% weight=40
    //% blockId=AIIdentify_getid block="get ID"
    export function getid(): number{
        pins.i2cWriteNumber(ai_address, 10, NumberFormat.Int8LE, true);
        let value = pins.i2cReadNumber(ai_address, NumberFormat.Int8LE, false);
        return value;
    }

    //% group="图像识别"
    //% weight=40
    //% blockId=AIIdentify_setnum block="set number|%index"
    export function setnum(index: number):void{
        pins.i2cWriteNumber(ai_address, 1, NumberFormat.Int8LE, true);
        pins.i2cWriteNumber(ai_address, index, NumberFormat.Int8LE, false);
    }

    //% group="图像识别"
    //% weight=40
    //% blockId=AIIdentify_setthres block="set threshold|%index"
    export function setthreshold(index: number):void{
        pins.i2cWriteNumber(ai_address, 2, NumberFormat.Int8LE, true);
        pins.i2cWriteNumber(ai_address, index, NumberFormat.Int8LE, false);
    }

    //% group="图像识别"
    //% weight=40
    //% blockId=AIIdentify_setrgb block="set rgb|%light1 state|%rgbstate"
    export function setrgb(light1: ailight, state: rgbstate):void{
        pins.i2cWriteNumber(ai_address, light1, NumberFormat.Int8LE, true);
        pins.i2cWriteNumber(ai_address, state, NumberFormat.Int8LE, false);
    }

    //% group="颜色识别"
    //% weight=40
    //% blockId=AIIdentify_detectcolor block="detect color|%color"
    export function detectcolor(color: allcolor):void{
        pins.i2cWriteNumber(ai_address, 7, NumberFormat.Int8LE, true);
        pins.i2cWriteNumber(ai_address, color, NumberFormat.Int8LE, false);
    }

    //% group="颜色识别"
    //% weight=40
    //% blockId=AIIdentify_getdetectedcolor_axis block="get detected color axis|%axis"
    export function getdetectedcoloraxis(axis: coloraxis): number{
        pins.i2cWriteNumber(ai_address, axis, NumberFormat.Int8LE, true);
        let value = pins.i2cReadNumber(ai_address, NumberFormat.Int8LE, false);
        return value;
    }


    //% group="人脸识别"
    //% weight=40
    //% blockId=AIIdentify_getdetectedface_axis block="get detected face axis|%axis"
    export function getdetectedfaceaxis(axis: faceaxis): number {
        pins.i2cWriteNumber(ai_address, axis, NumberFormat.Int8LE, true);
        let value = pins.i2cReadNumber(ai_address, NumberFormat.Int8LE, false);
        return value;
    }

}