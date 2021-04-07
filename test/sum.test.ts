import chai from 'chai'
import {sum} from "~/index"

const expect = chai.expect
const assert = chai.assert

chai.should()

describe('sum', () => {

  it('should be ok', async () => {
    const result = sum(1, 2)
    result.should.equal(3)
    expect(result).to.equal(3)
    assert.equal(result, 3)
  })

})
