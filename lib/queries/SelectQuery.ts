import Query from '../Query';
import ConditionRestriction from './restrictions/ConditionRestriction';

export default class SelectQuery extends Query {

    public select(...fields: string[]): SelectQuery {
        this.queryString = `SELECT ${fields.join(', ')}`;

        return this;
    }

    public from(table: string): SelectQuery {
        this.queryString = `${this.queryString} FROM ${table}`;

        return this;
    }

    public where(condition: ConditionRestriction): SelectQuery {
        this.queryString = `${this.queryString} WHERE ${condition.getQueryString()}`;
        
        return this;
    }

    public limitTo(limit: number): SelectQuery {
        this.queryString = `${this.queryString} LIMIT ${limit}`;

        return this;
    }

    public orderBy(order: string): SelectQuery {
        this.queryString = `${this.queryString} ORDER BY ${order}`;

        return this;
    }

}
