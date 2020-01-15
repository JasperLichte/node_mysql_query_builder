import Query from '../Query';

export default class InsertQuery extends Query {

    public insert(values: {[key: string]: string|number}): InsertQuery {
        const keys = Object.keys(values);
        const vals = keys.map(k => values[k]);

        this.queryString = `INSERT INTO ##TABLE## (${keys.join(', ')}) VALUES (${vals.join(', ')})`;

        return this;
    }

    public into(table: string): InsertQuery {
        this.queryString = this.queryString.replace('##TABLE##', table);

        return this;
    }

}
