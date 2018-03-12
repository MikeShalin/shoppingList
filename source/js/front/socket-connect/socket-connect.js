/**
 * Created by mike on 12.03.18.
 */

const port = 3001,
    socket = io.connect("http://localhost:" + port);

export default socket;


