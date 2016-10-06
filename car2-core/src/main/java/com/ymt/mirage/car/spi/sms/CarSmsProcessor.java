/**
 * 
 */
package com.ymt.mirage.car.spi.sms;

import org.springframework.stereotype.Component;

import com.ymt.mirage.sms.spi.AbstractSmsProcessor;

/**
 * @author zhailiang
 * @since 2016年6月8日
 */
@Component("carSmsProcessor")
public class CarSmsProcessor extends AbstractSmsProcessor {
    
    @Override
    public void send(String phone, String message) {
        if(SmsDemo.isMobileNO(phone)){
            SmsDemo.sms_api2(phone, message);
        }
    }

    @Override
    public void send(String phone, String cid, String[] params) {
        // TODO Auto-generated method stub
        
    }

}
