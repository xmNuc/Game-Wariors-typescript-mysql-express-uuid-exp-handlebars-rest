import { static as eStatic, urlencoded } from 'express';
import * as express from 'express';
import * as methodOverride from 'method-override';
import { engine } from 'express-handlebars';

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
