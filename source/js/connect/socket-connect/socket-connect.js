/**
 * Created by mike on 12.03.18.
 */

const port = 3003,
    socket = io.connect("http://mixailshalinstudio.ru:" + port);

export default socket;


