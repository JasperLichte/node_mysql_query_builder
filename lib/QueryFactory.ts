import SelectQuery from './queries/SelectQuery';import InsertQuery from './queries/InsertQuery';

export default class QueryFactory {

    public static select(...fields: string[]): SelectQuery {
        return (new SelectQuery()).select(...fields);
    }

    public static insert(values: {[key: string]: string|number}): InsertQuery {
        return (new InsertQuery()).insert(values);
    }

}
