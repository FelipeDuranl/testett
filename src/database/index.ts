import { createConnection } from "typeorm";

import { Post } from '../entities/Posts'; 
import { User } from '../entities/Users'; 

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "Twidur",
  entities: [
      Post,
      User
  ],
});