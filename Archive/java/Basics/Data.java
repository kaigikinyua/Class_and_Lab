class Data{
	public static String consoleInput(String message){
		System.out.println(message);
		String data=System.console().readLine();
		return data;
	}
	public static void consoleOutPut(String message,String messageType){
		switch(messageType){
			case "error":
				message="Error: "+message
				break;
			case "success":
				message="Success: "+message
				break;
			default:
				message=message+"\n"
		}
		System.out.println(message);
	}

}

class Files{
	String targetDir;
	Files(String targetDir){
		this.targetDir=targetDir;
	}
	//readFile
	//writeFile
	//createFile
	//deleteFile
	//appendToFile
}