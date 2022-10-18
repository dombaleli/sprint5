class Opinions{
    constructor(joke, score, data){
      this._joke  = joke;
      this._score = score;
      this._data  = data;
    }
    get joke(){
      return this._joke;
    }
    get score(){
      return this._score;
    }
    get data(){
      return this._data;
    }
    set joke(joke) { 
      this._joke = joke;
    }
    set score(score) { 
      this._score = score;
    }
    set data(data) { 
      this._data = data;
    }
  }