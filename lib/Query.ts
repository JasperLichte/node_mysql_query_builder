import { Connection, FieldPacket, RowDataPacket, OkPacket } from 'mysql2/promise';

export default class Query {

    protected queryString: string = '';

    public async execute(connection: Connection): Promise<[
        RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[],
        FieldPacket[]
    ]> {
        return await connection.execute(this.getQueryString());
    }

    public getQueryString = () => this.queryString;

}
