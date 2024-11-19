export default class IPSC {
  private cycles: number;
  private delay: number;
  private delayBetweenShots: number;
  private targetsNumber: number;
  private targetParts: number;
  private synth: SpeechSynthesis;
  private _process: Array<any>;

  constructor({ cycles, delay, delayBetweenShots, targetsNumber }: { cycles: number, delay: number, delayBetweenShots: number, targetsNumber: number }) {
    this.cycles = cycles;
    this.delay = delay;
    this.delayBetweenShots = delayBetweenShots;
    this.targetsNumber = targetsNumber;
    this.targetParts = 2;
    this.synth = window.speechSynthesis;
    this._process = [];
  }

  public get process(): Array<any> {
    return this._process;
  }

  public set process(value: Array<any>) {
    this._process = value;
  }

  public async speakTargets(): Promise<void> {
    let index = 0;
    let process: Array<any> = [];

    // setTimeout if delay is set
    if (this.delay) {
      await new Promise(resolve => setTimeout(resolve, this.delay * 1000));
    }

    for(; index < this.cycles; index++) {
      let _index = 0;
      const cycleProcess: Array<number> = [];

      for (; _index < this.targetParts; _index++) {
        const randTargetIndex: any = Math.floor(Math.random() * this.targetsNumber) + 1;
        const utter = new SpeechSynthesisUtterance(randTargetIndex.toString());

        // send text to speech
        await this.synth.speak(utter);
        cycleProcess[_index] = randTargetIndex;
      }

      process[index] = cycleProcess;
      // set  delay between shots
      if (this.delayBetweenShots) {
        await new Promise(resolve => setTimeout(resolve, this.delayBetweenShots * 1000));
      }
    }

    this.process = process;
    process = [];
  }

  public getVoice(voices: Array<Object>, voiceName: String) {
    return voices.map((voice: any) => {
      if (voice.name === voiceName) {
        return voice;
      }
      else if (voice.lang === 'en-US') {
        return voice;
      }
    });
  }
}
