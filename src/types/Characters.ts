interface Character {
    id: number;
    name:  string;
    status: CharacterStatus;
    species:  number;
    type: string;
    gender: CharacterGender;
    origin: Location;
    location:Location;
    image: string;
    episode: string[];
    url: string;
    created: string;  
}
enum CharacterStatus{
    "Alive",
    "Dead",
    "Uknown",
}
enum CharacterGender{
    "Male",
    "Female",
    "Unknown",
    "Genderless",
}

interface Location{
  name: string;
  url: string;       

}


