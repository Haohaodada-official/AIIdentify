

//% weight=10 color=#FF6600 icon="\uf001" block="AI摄像头"

namespace AIIdentify {
	
	//% weight=40
    //% blockId=AIIdentify_setup block="get ID"
	export function getid():void{
		pins.i2cReadNumber(36, NumberFormat.Int8LE, false);
	}


}