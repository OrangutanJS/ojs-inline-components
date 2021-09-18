import initialConfigService from '../initialConfigService';
import oInput from "../../components/oInput";

const COMPONENT_INSTANCE = oInput('number');

describe('initialConfigService tests', () => {
  it('returns false when no arguments given', () => {
    // when
    const result = initialConfigService();

    // then
    expect(result).toBe(false);
  });

  it('returns false when config is not an object', () => {
    // given
    const config = 'definitely not an object';

    // when
    const result = initialConfigService(config, COMPONENT_INSTANCE);

    // then
    expect(result).toBe(false);
  });

  it('returns false when there is not componentInstance given', () => {
    // given
    const config = {
      id: 'example_id'
    }

    // when
    const result = initialConfigService(config);

    // then
    expect(result).toBe(false);
  });
});
