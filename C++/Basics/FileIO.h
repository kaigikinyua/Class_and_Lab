#ifndef FILEIO_H
#define FILEIO_H

class FileIO{
    public:
    FileIO(std::string filePath);
    std::string readFile();
    bool writeToFile(std::string data);
    bool appendToFile(std::string data);
};

#endif