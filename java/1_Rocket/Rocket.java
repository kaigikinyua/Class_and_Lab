import Data.*;
class Rocket{
	public String model;
	public String mission;
	public String fuelCapacity;
	public int weight;//weight=mass*gravity
	public int engine_number;
	public int thrust;
	Rocket(String model,String mission,String fuelCapacity, String weight, String engine_number){
		this.model=model;
		this.mission=mission;
		this.fuelCapacity=fuelCapacity;
		this.weight=weight;
		this.engine_number=engine_number;
	}

	public int calcAcceleration(){
		//a=Fnet/mass
		//Fnet=Thrust-weight
		int acc=0;
		int fNet=this.thrust-this.weight;
		try{
			int acc=fNet/this.weight;
		}catch(Exception e){
			Data.consoleOutput("Weight is 0",'Error');
		}
		return acc;
	}

	public int calcHeight(){
		return 0;
	}
}


class Engine{
	int intake;
	
}