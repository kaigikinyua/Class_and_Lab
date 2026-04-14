from numpy import random
import numpy as np
import csv
class DataBlocks:
    months=[
        'Jan','Feb','Mar',
        'Apr','May','Jun',
        'Jul','Aug','Sep',
        'Oct','Nov','Dec'
    ]
    monthDays=[
        31,29,31,30,31,30,31,31,30,31,30,31
    ]

class Generator:
    @staticmethod
    def genMontlySales(month,days):
        sales=random.randint(0,1000,days)
        return [month]+sales.tolist()

class CsvFile:
    @staticmethod
    def writeToFile(filePath,data):
        with open(filePath, 'w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            # Write all rows at once
            writer.writerows(data)
    @staticmethod
    def readFromFile(filePath):
        data=[]
        with open(filePath,'r') as file:
            reader=csv.reader(file)
            for row in reader:
                data.append(row)
        return data
        
    @staticmethod
    def getFileName():
        filePath=input("Enter File name")
        if(filePath!=None and len(filePath)>0):
            return f'{filePath}.csv'
        else:
            return 'placeHolder.csv'
    
def main():
    yearlySales=[]
    i=0
    for month in DataBlocks.months:
        yearlySales.append(Generator.genMontlySales(month,DataBlocks.monthDays[i]))
        i+=1
    filePath=CsvFile.getFileName()
    CsvFile.writeToFile(filePath,yearlySales)

class Analysis:
    @staticmethod
    def mean_median(data):
        d=np.array(data)
        mean=np.mean(d)
        median=np.median(d)
        return mean,median


if __name__=="__main__":
    reader=CsvFile.readFromFile('placeHolder.csv')
    for row in reader:
        Analysis.mean_median(row[1:20])