package com.crud.crud.events;

import com.crud.crud.entity.ProductEntity;
import com.crud.crud.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

@Component
public class ProductModelListener extends AbstractMongoEventListener<ProductEntity> {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public ProductModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<ProductEntity> event) {
        if (event.getSource().getId() < 1) {
            event.getSource().setId(sequenceGenerator.generateSequence(ProductEntity.SEQUENCE_NAME));
        }
    }


}
