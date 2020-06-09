

//% weight=10 color=#FF6600 icon="\uf030" block="AI摄像头"

namespace AIIdentify {
	
	export enum ailight {
        //% block=red
        Red = 3,
        //% block=green
        green = 4,
        //% block=blue
        blue = 5
	}
	
	export enum rgbstate{
		//% block=lightup
        state1 = 1,
		//% block=putout
        state2 = 0
	}
	
	
	let ai_address = 36;
	
	//% weight=40
    //% blockId=AIIdentify_getid block="get ID"
	export function getid(): number{
		pins.i2cReadNumber(ai_address, NumberFormat.Int8LE, false);
	}
	
	//% weight=40
    //% blockId=AIIdentify_setnum block="set number|%index"
	export function setnum(index: number):void{
		pins.i2cWriteNumber(ai_address, 1, NumberFormat.Int8LE, true);
		pins.i2cWriteNumber(ai_address, index, NumberFormat.Int8LE, false);
	}
	
	//% weight=40
    //% blockId=AIIdentify_setthres block="set threshold|%index"
	export function setthreshold(index: number):void{
		pins.i2cWriteNumber(ai_address, 2, NumberFormat.Int8LE, true);
		pins.i2cWriteNumber(ai_address, index, NumberFormat.Int8LE, false);
	}
	
	//% weight=40
    //% blockId=AIIdentify_setrgb block="set rgb|%light1 state|%rgbstate"
	export function setrgb(light1: ailight, state: rgbstate):void{
		pins.i2cWriteNumber(ai_address, light1, NumberFormat.Int8LE, true);
		pins.i2cWriteNumber(ai_address, state, NumberFormat.Int8LE, false);
	}


}