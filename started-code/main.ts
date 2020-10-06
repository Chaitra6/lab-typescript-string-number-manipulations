import {
  StringManipulationService,
  NumberManipulationService,
} from "./main-service";

class StringManipulation implements StringManipulationService {
  public print(word: string): void {
    console.log(word);
    console.log(word.toUpperCase());
    console.log(word.toLowerCase());
    console.log(word.charAt(3));
    console.log(word.concat(" prograd "));
    console.log(word.slice(3, -1));
    console.log(word.length);
  }

  printWithSpace(sentence: string): void {
    console.log(sentence);
    console.log(sentence.split("").join(" "));
  }

  findVowel(str: string): void {
    console.log(str);
    console.log(str.replace(/[^aeiou]/gi, "").length);
  }
}

let object = new StringManipulation();
object.print("faceprep");
object.printWithSpace("prograd");
object.findVowel("faceprep");

class NumberManipulation implements NumberManipulationService {
  findPrime(num: number): void {
    console.log(num);
    if (num % 2 == 0) {
      console.log("Not a Prime Number");
    } else {
      console.log("Prime Number");
    }
  }

  findMagic(num: number): void {
    console.log(num);
    var sum: number = 0;
    while (num > 9) {
      sum = num;
      var s: number = 0;
      while (sum != 0) {
        s = s + (sum % 10);
        sum = sum / 10;
      }
      num = s;
    }

    if (num == 1) {
      console.log("MAGIC NUMBER");
    } else {
      console.log("NOT A MAGIC NUMBER");
    }
  }
}
