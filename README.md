# Mysql query builder for node

## Installation

```
npm i query_builder_for_mysql_in_node
```

## Examples

### Select statement
```ts
import { select } from 'query_builder_for_mysql_in_node';
import { field } from "query_builder_for_mysql_in_node/queries/restrictions";

const [rows] = await select('id')
                    .from('users')
                    .where(
                        field('id').equals(42)
                    )
                    .orderBy('id')
                    .limitTo(34)
                    .execute();
```

### Insert statement
```ts
import { insert } from 'query_builder_for_mysql_in_node';

const query = insert({'id': 42, 'name': '"Bob"'}).into('users');
// yields: INSERT INTO users (id, name) VALUES (42, "Bob")

await query.execute();
```
