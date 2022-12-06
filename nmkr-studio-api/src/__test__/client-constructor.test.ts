import { NMKRClient } from '../index';
test('Constructor', async () => {
    const client=new NMKRClient({TOKEN:process.env.NMKRTOKEN})
    
    expect(client).not.toBeNull();
});