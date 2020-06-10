class Rocket{
	public String model;
	public String mission;
	public String fuelCapacity;
	public int weight;
	public int engine_number;

	Rocket(String model,String mission,String fuelCapacity, String weight, String engine_number){
		this.model=model;
		this.mission=mission;
		this.fuelCapacity=fuelCapacity;
		this.weight=weight;
		this.engine_number=engine_number;
	}

	public int calcAcceleration(){
		//factor weight,thrust,gravity
		return 0;
	}

	public int calcThrust(){
		return 0;
	}

	public int calcHeight(){
		return 0;
	}
}


class Engine{
	int intake;
	
}