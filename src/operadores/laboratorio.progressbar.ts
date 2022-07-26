// Laboratorio: ProgressBar

import { fromEvent, map } from "rxjs";
import { tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML= `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis vulputate massa. Aliquam accumsan maximus ligula ut lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In in scelerisque lectus, quis porttitor quam. Etiam non ante vitae dolor fermentum lobortis. Sed diam est, convallis sit amet fringilla vel, molestie sit amet urna. Nullam ac libero nibh.
<br><br>
Donec rhoncus enim quis ante sagittis maximus. Quisque dui mi, vehicula nec pulvinar vitae, condimentum id nibh. Morbi arcu nisl, cursus quis condimentum a, interdum a leo. In scelerisque hendrerit magna, id pharetra sem imperdiet et. Nulla sit amet nisl leo. In fermentum lectus et mauris tempus, et sagittis eros aliquam. Quisque metus ex, auctor at aliquam in, volutpat ut justo. Proin aliquet arcu ac mauris feugiat feugiat. Nam placerat, erat a congue lobortis, augue neque facilisis nibh, ac congue urna lectus id lacus. Donec ornare eros vel euismod lobortis. Pellentesque posuere rutrum lacinia. Phasellus condimentum, ante id laoreet fermentum, odio elit venenatis metus, at dictum dolor nisl ac tortor. Sed vehicula commodo lectus, ut lacinia nibh vestibulum ac. Praesent nulla odio, faucibus at est et, ornare finibus dolor. Cras maximus accumsan viverra.
<br><br>
Vivamus hendrerit velit sit amet nunc suscipit feugiat. Pellentesque id varius quam. Aliquam facilisis posuere orci, sit amet rhoncus velit lobortis nec. Sed ultrices placerat semper. Nam molestie quam eget euismod molestie. Vestibulum congue placerat metus nec facilisis. Curabitur in dolor nulla.
<br><br>
Aliquam erat volutpat. Pellentesque viverra nisi eu dictum viverra. Mauris ut elit pretium, fermentum sem vel, ultricies sapien. Nulla volutpat varius neque, quis tempor tellus congue ut. Vestibulum feugiat ipsum vitae sollicitudin maximus. Nulla vitae orci ut felis iaculis pharetra. Maecenas aliquam est sit amet tellus porttitor sodales. Fusce fermentum libero ut sagittis euismod. Praesent cursus sem ac lacinia bibendum. Aenean id convallis nunc, eu consequat purus. Aliquam erat volutpat. Sed ullamcorper nisl vel tellus pharetra, a tempus ipsum fermentum. Maecenas rhoncus sagittis nisi nec maximus. Integer semper vestibulum condimentum. Sed tincidunt lorem quis maximus porttitor.
<br><br>
Donec elementum consectetur ipsum, sed rhoncus elit pulvinar ut. Pellentesque ultricies vehicula elementum. Morbi nunc sem, auctor quis nibh non, condimentum euismod felis. Sed dictum tincidunt ligula. Nam aliquam neque a neque venenatis, eget fringilla leo luctus. Nullam bibendum dictum sollicitudin. Mauris sed felis sit amet orci euismod tincidunt. Cras ut convallis eros. Suspendisse in blandit dolor. Quisque euismod bibendum augue quis lacinia. Duis interdum commodo eros hendrerit bibendum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis vulputate massa. Aliquam accumsan maximus ligula ut lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In in scelerisque lectus, quis porttitor quam. Etiam non ante vitae dolor fermentum lobortis. Sed diam est, convallis sit amet fringilla vel, molestie sit amet urna. Nullam ac libero nibh.
<br><br>
Donec rhoncus enim quis ante sagittis maximus. Quisque dui mi, vehicula nec pulvinar vitae, condimentum id nibh. Morbi arcu nisl, cursus quis condimentum a, interdum a leo. In scelerisque hendrerit magna, id pharetra sem imperdiet et. Nulla sit amet nisl leo. In fermentum lectus et mauris tempus, et sagittis eros aliquam. Quisque metus ex, auctor at aliquam in, volutpat ut justo. Proin aliquet arcu ac mauris feugiat feugiat. Nam placerat, erat a congue lobortis, augue neque facilisis nibh, ac congue urna lectus id lacus. Donec ornare eros vel euismod lobortis. Pellentesque posuere rutrum lacinia. Phasellus condimentum, ante id laoreet fermentum, odio elit venenatis metus, at dictum dolor nisl ac tortor. Sed vehicula commodo lectus, ut lacinia nibh vestibulum ac. Praesent nulla odio, faucibus at est et, ornare finibus dolor. Cras maximus accumsan viverra.
<br><br>
Vivamus hendrerit velit sit amet nunc suscipit feugiat. Pellentesque id varius quam. Aliquam facilisis posuere orci, sit amet rhoncus velit lobortis nec. Sed ultrices placerat semper. Nam molestie quam eget euismod molestie. Vestibulum congue placerat metus nec facilisis. Curabitur in dolor nulla.
<br><br>
Aliquam erat volutpat. Pellentesque viverra nisi eu dictum viverra. Mauris ut elit pretium, fermentum sem vel, ultricies sapien. Nulla volutpat varius neque, quis tempor tellus congue ut. Vestibulum feugiat ipsum vitae sollicitudin maximus. Nulla vitae orci ut felis iaculis pharetra. Maecenas aliquam est sit amet tellus porttitor sodales. Fusce fermentum libero ut sagittis euismod. Praesent cursus sem ac lacinia bibendum. Aenean id convallis nunc, eu consequat purus. Aliquam erat volutpat. Sed ullamcorper nisl vel tellus pharetra, a tempus ipsum fermentum. Maecenas rhoncus sagittis nisi nec maximus. Integer semper vestibulum condimentum. Sed tincidunt lorem quis maximus porttitor.
<br><br>
Donec elementum consectetur ipsum, sed rhoncus elit pulvinar ut. Pellentesque ultricies vehicula elementum. Morbi nunc sem, auctor quis nibh non, condimentum euismod felis. Sed dictum tincidunt ligula. Nam aliquam neque a neque venenatis, eget fringilla leo luctus. Nullam bibendum dictum sollicitudin. Mauris sed felis sit amet orci euismod tincidunt. Cras ut convallis eros. Suspendisse in blandit dolor. Quisque euismod bibendum augue quis lacinia. Duis interdum commodo eros hendrerit bibendum.
<br><br>
Aliquam erat volutpat. Pellentesque viverra nisi eu dictum viverra. Mauris ut elit pretium, fermentum sem vel, ultricies sapien. Nulla volutpat varius neque, quis tempor tellus congue ut. Vestibulum feugiat ipsum vitae sollicitudin maximus. Nulla vitae orci ut felis iaculis pharetra. Maecenas aliquam est sit amet tellus porttitor sodales. Fusce fermentum libero ut sagittis euismod. Praesent cursus sem ac lacinia bibendum. Aenean id convallis nunc, eu consequat purus. Aliquam erat volutpat. Sed ullamcorper nisl vel tellus pharetra, a tempus ipsum fermentum. Maecenas rhoncus sagittis nisi nec maximus. Integer semper vestibulum condimentum. Sed tincidunt lorem quis maximus porttitor.
<br><br>
Donec elementum consectetur ipsum, sed rhoncus elit pulvinar ut. Pellentesque ultricies vehicula elementum. Morbi nunc sem, auctor quis nibh non, condimentum euismod felis. Sed dictum tincidunt ligula. Nam aliquam neque a neque venenatis, eget fringilla leo luctus. Nullam bibendum dictum sollicitudin. Mauris sed felis sit amet orci euismod tincidunt. Cras ut convallis eros. Suspendisse in blandit dolor. Quisque euismod bibendum augue quis lacinia. Duis interdum commodo eros hendrerit bibendum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis vulputate massa. Aliquam accumsan maximus ligula ut lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In in scelerisque lectus, quis porttitor quam. Etiam non ante vitae dolor fermentum lobortis. Sed diam est, convallis sit amet fringilla vel, molestie sit amet urna. Nullam ac libero nibh.
<br><br>
Donec rhoncus enim quis ante sagittis maximus. Quisque dui mi, vehicula nec pulvinar vitae, condimentum id nibh. Morbi arcu nisl, cursus quis condimentum a, interdum a leo. In scelerisque hendrerit magna, id pharetra sem imperdiet et. Nulla sit amet nisl leo. In fermentum lectus et mauris tempus, et sagittis eros aliquam. Quisque metus ex, auctor at aliquam in, volutpat ut justo. Proin aliquet arcu ac mauris feugiat feugiat. Nam placerat, erat a congue lobortis, augue neque facilisis nibh, ac congue urna lectus id lacus. Donec ornare eros vel euismod lobortis. Pellentesque posuere rutrum lacinia. Phasellus condimentum, ante id laoreet fermentum, odio elit venenatis metus, at dictum dolor nisl ac tortor. Sed vehicula commodo lectus, ut lacinia nibh vestibulum ac. Praesent nulla odio, faucibus at est et, ornare finibus dolor. Cras maximus accumsan viverra.
<br><br>
Vivamus hendrerit velit sit amet nunc suscipit feugiat. Pellentesque id varius quam. Aliquam facilisis posuere orci, sit amet rhoncus velit lobortis nec. Sed ultrices placerat semper. Nam molestie quam eget euismod molestie. Vestibulum congue placerat metus nec facilisis. Curabitur in dolor nulla.
<br><br>
Aliquam erat volutpat. Pellentesque viverra nisi eu dictum viverra. Mauris ut elit pretium, fermentum sem vel, ultricies sapien. Nulla volutpat varius neque, quis tempor tellus congue ut. Vestibulum feugiat ipsum vitae sollicitudin maximus. Nulla vitae orci ut felis iaculis pharetra. Maecenas aliquam est sit amet tellus porttitor sodales. Fusce fermentum libero ut sagittis euismod. Praesent cursus sem ac lacinia bibendum. Aenean id convallis nunc, eu consequat purus. Aliquam erat volutpat. Sed ullamcorper nisl vel tellus pharetra, a tempus ipsum fermentum. Maecenas rhoncus sagittis nisi nec maximus. Integer semper vestibulum condimentum. Sed tincidunt lorem quis maximus porttitor.
<br><br>
Donec elementum consectetur ipsum, sed rhoncus elit pulvinar ut. Pellentesque ultricies vehicula elementum. Morbi nunc sem, auctor quis nibh non, condimentum euismod felis. Sed dictum tincidunt ligula. Nam aliquam neque a neque venenatis, eget fringilla leo luctus. Nullam bibendum dictum sollicitudin. Mauris sed felis sit amet orci euismod tincidunt. Cras ut convallis eros. Suspendisse in blandit dolor. Quisque euismod bibendum augue quis lacinia. Duis interdum commodo eros hendrerit bibendum.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

const calculaWidth = (event) => {
    
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    console.log(scrollTop, scrollHeight, clientHeight);
    return (scrollTop / (scrollHeight-clientHeight))*100;
};

const progress$ = fromEvent(document,'scroll').pipe(
    //tap(val => console.log("antes", val) ),
    map(val => calculaWidth(val)),
    tap(
        val => console.log(val)
        //complete: () => console.log('Completo')
    )
);

progress$.subscribe(porc => {
    progressBar.style.width = `${porc}%`;
})

