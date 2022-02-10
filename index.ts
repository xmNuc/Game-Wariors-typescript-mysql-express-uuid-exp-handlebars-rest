import * as express from 'express';
import 'express-async-errors';
import { static as eStatic, urlencoded } from 'express';
import * as methodOverride from 'method-override';
import { engine } from 'express-handlebars';
import { homeRouter } from './routers/home';
import { warriorRouter } from './routers/warrior';
import { arenaRouter } from './routers/arena';
import { hallOffFameRouter } from './routers/hall-off-fame';

const app = express();

app.use(methodOverride('_method'));
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(eStatic(__dirname));
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    // helpers: ???
  })
);
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/warrior', warriorRouter);
app.use('/arena', arenaRouter);
app.use('/hall-off-fame', hallOffFameRouter);

// app.use(handleError);

app.listen(3000, 'localhost', () => {
  console.log('Server has started on http://localhost:3000');
});
