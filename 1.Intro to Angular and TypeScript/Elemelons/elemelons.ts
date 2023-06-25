abstract class Melon {
    public weight: number;
    public melonSort: string;
  
    constructor(weight: number, melonSort: string) {
      this.weight = weight;
      this.melonSort = melonSort;
    }
  
    abstract toString(): string;
  }
  
  class Watermelon extends Melon {
    private elementIndex: number;
  
    constructor(weight: number, melonSort: string) {
      super(weight, melonSort);
      this.elementIndex = weight * melonSort.length;
    }
  
    toString(): string {
      return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
  }
  
  class Firemelon extends Melon {
    private elementIndex: number;
  
    constructor(weight: number, melonSort: string) {
      super(weight, melonSort);
      this.elementIndex = weight * melonSort.length;
    }
  
    toString(): string {
      return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
    }
  }
  
  class Earthmelon extends Melon {
    private elementIndex: number;
  
    constructor(weight: number, melonSort: string) {
      super(weight, melonSort);
      this.elementIndex = weight * melonSort.length;
    }
  
    toString(): string {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
      }
    }
    
    class Airmelon extends Melon {
      private elementIndex: number;
    
      constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = weight * melonSort.length;
      }
    
      toString(): string {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
      }
    }
    
    class Melolemonmelon extends Watermelon {
      private elements: string[] = ['Water', 'Fire', 'Earth', 'Air'];
      private currentElementIndex: number;
    
      constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.currentElementIndex = 0;
      }
    
      morph(): void {
        this.currentElementIndex = (this.currentElementIndex + 1) % this.elements.length;
       
      }
    
      toString(): string {
        return `Element: ${this.elements[this.currentElementIndex]}\nSort: ${this.melonSort}\nElement Index: ${ this.currentElementIndex}`;
      }
    }
    
    // Пример за използване:
    
    // let test: Melon = new Melon(100, "Test");
    // Генерира грешка, тъй като класът Melon е абстрактен и не може да бъде инстанциран
    
    let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
    console.log(watermelon.toString());
    // Изход:
    // Element: Water
    // Sort: Kingsize
    // Element Index: 100
    
    let melolemonmelon: Melolemonmelon = new Melolemonmelon(10, "Super");
    console.log(melolemonmelon.toString());
    // Изход:
    // Element: Water
    // Sort: Super
    // Element Index: 40
    
    melolemonmelon.morph();
    console.log(melolemonmelon.toString());
    // Изход:
    // Element: Fire
    // Sort: Super
    // Element Index: 40
    
    melolemonmelon.morph();
    console.log(melolemonmelon.toString());
    // Изход:
    // Element: Earth
    // Sort: Super
    // Element Index: 40
    
    melolemonmelon.morph();
    console.log(melolemonmelon.toString());
    // Изход:
    // Element: Air
    // Sort: Super
    // Element Index: 40
    
    melolemonmelon.morph();
    console.log(melolemonmelon.toString());
    // Изход:
    // Element: Water
    // Sort: Super
    // Element Index: 40