const readline=require('readline');class Progress{constructor(a,b,c){this.pos=0,this.total=b||100,this.running=!1,this.prefix=a||'',this.bars=c,this.suffix='',this.lastLine='',this.done='#',this.undone='-'}stop(a){this.running&&(this.running=!1,a&&this.update(this.total,''),this.tick(),process.stderr.write('\n'))}tick(){var a=Math.floor;let b=a(100*(this.pos/this.total)),c=a(b/100*this.bars),d=this.bars-c,e=`${this.prefix}${('  '+b).slice(-3)}% [`+this.done.repeat(c)+this.undone.repeat(d)+`] ${this.suffix||''}`.trim();if(e!==this.lastLine&&(readline.clearLine(process.stderr,0),readline.cursorTo(process.stderr,0),process.stderr.write(e),this.lastLine=e),this.running){if(this.pos===this.total)return this.stop();setTimeout(this.tick.bind(this),100)}}start(){this.running=!0,this.tick()}update(a,b){this.pos=a,this.suffix=b}}module.exports=Progress;