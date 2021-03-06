//? if (FLOAT32) {
// types/floats/float32

/**
 * Writes a 32bit float.
 * @param {number} value Value to write
 * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
 * @returns {!ByteBuffer} this
 * @expose
 */
ByteBuffer.prototype.writeFloat32 = function(value, offset) {
    //? RELATIVE();
    if (!this.noAssert) {
        if (typeof value !== 'number')
            throw new TypeError("Illegal value: "+value+" (not a number)");
        //? ASSERT_OFFSET();
    }
    //? ENSURE_CAPACITY(4);
    //? if (NODE) { // FIXME: Is there any way to inline the following in a sane way?
    this.littleEndian
        ? this.buffer.writeFloatLE(value, offset, true)
        : this.buffer.writeFloatBE(value, offset, true);
    //? } else
    this.view.setFloat32(offset, value, this.littleEndian);
    //? RELATIVE(4);
    return this;
};
//? if (ALIASES) {

/**
 * Writes a 32bit float. This is an alias of {@link ByteBuffer#writeFloat32}.
 * @function
 * @param {number} value Value to write
 * @param {number=} offset Offset to write to. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
 * @returns {!ByteBuffer} this
 * @expose
 */
ByteBuffer.prototype.writeFloat = ByteBuffer.prototype.writeFloat32;
//? }

/**
 * Reads a 32bit float.
 * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
 * @returns {number}
 * @expose
 */
ByteBuffer.prototype.readFloat32 = function(offset) {
    //? RELATIVE();
    if (!this.noAssert) {
        //? ASSERT_OFFSET(4);
    }
    //? if (NODE) {
    var value = this.littleEndian
        ? this.buffer.readFloatLE(offset, true)
        : this.buffer.readFloatBE(offset, true);
    //? } else
    var value = this.view.getFloat32(offset, this.littleEndian);
    //? RELATIVE(4);
    return value;
};
//? if (ALIASES) {

/**
 * Reads a 32bit float. This is an alias of {@link ByteBuffer#readFloat32}.
 * @function
 * @param {number=} offset Offset to read from. Will use and increase {@link ByteBuffer#offset} by `4` if omitted.
 * @returns {number}
 * @expose
 */
ByteBuffer.prototype.readFloat = ByteBuffer.prototype.readFloat32;
//? }

//? }